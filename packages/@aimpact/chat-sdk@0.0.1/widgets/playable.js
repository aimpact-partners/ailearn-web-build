System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "prismjs@1.29.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@0.0.2/shared/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, PlayerButton, Playable, __beyond_pkg, hmr;
  _export({
    PlayerButton: void 0,
    Playable: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_pragmateUi0036Icons) {
      dependency_3 = _pragmateUi0036Icons;
    }, function (_prismjs) {
      dependency_4 = _prismjs;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_5 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat002SharedHooks) {
      dependency_6 = _aimpactChat002SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/chat-sdk", "0.0.1"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@0.0.1/widgets/playable"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/icons', dependency_3], ['prismjs', dependency_4], ['@beyond-js/react-18-widgets/hooks', dependency_5], ['@aimpact/chat/shared/hooks', dependency_6]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@0.0.1/widgets/playable');
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./button/PlayerButton
      *************************************/
      ims.set('./button/PlayerButton', {
        hash: 1802207148,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PlayerButton = PlayerButton;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          /*bundle */
          function PlayerButton(props) {
            const {
              player,
              id,
              content
            } = props;
            const [action, setAction] = React.useState('stop');
            const [processing, setProcessing] = React.useState(false);
            const onPlay = async ({
              listen
            }) => {
              setAction('play');
              player.positionToCut = 0;
              console.log('we play', id);
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
            return React.createElement(_icons.IconButton, {
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
        hash: 3141817637,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Clipboard = Clipboard;
          var React = require("react");
          var _icons = require("pragmate-ui/icons");
          function Clipboard({
            text,
            message
          }) {
            const ref = React.useRef(null);
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
                console.log('some error', e);
              }
            };
            return React.createElement("div", null, React.createElement("div", {
              className: 'clipboard__container',
              "data-text": text,
              ref: ref,
              onClick: onClick
            }, React.createElement(_icons.IconButton, {
              icon: 'copy'
            }), React.createElement("span", {
              className: 'action-copied'
            }, "Copied")));
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./code
      **********************/

      ims.set('./code', {
        hash: 3089612593,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Code = Code;
          var React = require("react");
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
            return React.createElement("div", {
              className: cls
            }, React.createElement("pre", null, React.createElement("code", {
              className: `regular__code language-${language}`,
              dangerouslySetInnerHTML: createMarkup()
            })), clipboard && React.createElement(_clipboard.Clipboard, {
              text: children,
              message: ''
            }));
          }
        }
      });

      /**************************
      INTERNAL MODULE: ./playable
      **************************/

      ims.set('./playable', {
        hash: 1145835424,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Playable = Playable;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _code = require("./code");
          var _useBoundary = require("./useBoundary");
          /* bundle */
          function Playable({
            id,
            content,
            autoplay,
            player,
            onClickWord
          }) {
            const mark = (0, _hooks2.useMarked)();
            const {
              ref,
              text,
              removeHighlight
            } = (0, _useBoundary.useBoundary)(id, player, autoplay, content);
            /**
             * Split the text into blocks of code and text.
             */
            const blocks = text.split(/(```[\s\S]*?```)/).filter(block => block.trim() !== '').map(block => ({
              content: block,
              isCode: block.startsWith('```')
            }));
            React.useEffect(() => {
              const playableContent = blocks.filter(item => !item.isCode);
              if (autoplay) player.play(playableContent.map(item => item.content).join(' '));
            }, [autoplay]);
            (0, _hooks.useBinder)([player], removeHighlight, 'on.finish');
            if (typeof text !== 'string') return null;
            const onClick = event => {
              event.preventDefault();
              event.stopPropagation();
              if (event.target.classList.contains('word')) {
                const index = event.target.dataset.index;
                const wordsArray = text.split(' ');
                const textToPlay = wordsArray.slice(index).join(' ');
                player.positionToCut = parseInt(index);
                player.play(textToPlay);
                if (onClickWord) onClickWord();
                // Implement your logic for playing the text from the clicked word to the end here.
              }
            };

            const output = blocks.map((block, i) => {
              const createSpan = (word, index) => `<span data-index="${index}${i}" class="word">${word}</span>`;
              if (block.isCode) {
                return React.createElement(_code.Code, {
                  key: `code-${i}`
                }, block.content.replaceAll('```', ''));
              }
              const content = mark(block.content.replaceAll('\n', '').split(' ').map(createSpan).join(' '));
              return React.createElement("div", {
                key: `content-${i}`,
                "data-block": i,
                className: 'message-text__container',
                onClick: onClick,
                dangerouslySetInnerHTML: {
                  __html: content
                }
              });
            });
            return React.createElement("div", {
              ref: ref
            }, output);
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./useBoundary
      *****************************/

      ims.set('./useBoundary', {
        hash: 3896454372,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBoundary = useBoundary;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function useBoundary(id, player, autoplay, content) {
            const ref = React.useRef(null);
            const [text, setText] = React.useState(content ?? '');
            const [cutIndex, setCutIndex] = React.useState(0);
            const removeHighlight = () => {
              ref.current.querySelectorAll('.highlight').forEach(element => element.classList.remove('highlight'));
            };
            (0, _hooks.useBinder)([player], () => {
              console.log('boundary', id, player.textId);
              if (id !== player.textId) return;
              const currentIndex = player.currentWord;
              const block = ref.current.querySelector('.message-text__container')?.dataset.block;
              if (player.positionToCut > 0) {
                const segmentToCut = player.text.slice(0, currentIndex).split(' ').length - 1;
                const finalPosition = player.positionToCut + segmentToCut;
                removeHighlight();
                if (!ref.current.querySelector(`[data-index="${finalPosition}"]`)) return;
                ref.current.querySelector(`[data-index="${finalPosition}"]`).classList.add('highlight');
                return;
              }
              const endOfWordIndex = text.indexOf(' ', currentIndex);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfaWNvbnMiLCJQbGF5ZXJCdXR0b24iLCJwcm9wcyIsInBsYXllciIsImlkIiwiY29udGVudCIsImFjdGlvbiIsInNldEFjdGlvbiIsInVzZVN0YXRlIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJvblBsYXkiLCJsaXN0ZW4iLCJwb3NpdGlvblRvQ3V0IiwiY29uc29sZSIsImxvZyIsInBsYXkiLCJvblBhdXNlIiwic3RvcCIsImFwcGx5IiwiaWNvbiIsIm9uQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiSWNvbkJ1dHRvbiIsImNsYXNzTmFtZSIsIkNsaXBib2FyZCIsInRleHQiLCJtZXNzYWdlIiwicmVmIiwidXNlUmVmIiwicG9seWZpbGwiLCJ0ZXh0QXJlYSIsImRvY3VtZW50IiwidmFsdWUiLCJzdHlsZSIsInRvcCIsImxlZnQiLCJwb3NpdGlvbiIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImZvY3VzIiwic2VsZWN0Iiwic3VjY2Vzc2Z1bCIsImV4ZWNDb21tYW5kIiwibXNnIiwiZXJyIiwiZXJyb3IiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic3BhbiIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJlIiwiUHJpc20iLCJfY2xpcGJvYXJkIiwiQ29kZSIsImxhbmd1YWdlIiwiY2hpbGRyZW4iLCJjcmVhdGVNYXJrdXAiLCJfX2h0bWwiLCJodG1sIiwiaGlnaGxpZ2h0IiwibGFuZ3VhZ2VzIiwiamF2YXNjcmlwdCIsImNscyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9jb2RlIiwiX3VzZUJvdW5kYXJ5IiwiUGxheWFibGUiLCJhdXRvcGxheSIsIm9uQ2xpY2tXb3JkIiwibWFyayIsInVzZU1hcmtlZCIsInJlbW92ZUhpZ2hsaWdodCIsInVzZUJvdW5kYXJ5IiwiYmxvY2tzIiwic3BsaXQiLCJmaWx0ZXIiLCJibG9jayIsInRyaW0iLCJtYXAiLCJpc0NvZGUiLCJzdGFydHNXaXRoIiwidXNlRWZmZWN0IiwicGxheWFibGVDb250ZW50IiwiaXRlbSIsImpvaW4iLCJ1c2VCaW5kZXIiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnRhaW5zIiwiaW5kZXgiLCJ3b3Jkc0FycmF5IiwidGV4dFRvUGxheSIsInNsaWNlIiwicGFyc2VJbnQiLCJvdXRwdXQiLCJpIiwiY3JlYXRlU3BhbiIsIndvcmQiLCJrZXkiLCJyZXBsYWNlQWxsIiwic2V0VGV4dCIsImN1dEluZGV4Iiwic2V0Q3V0SW5kZXgiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJ0ZXh0SWQiLCJjdXJyZW50SW5kZXgiLCJjdXJyZW50V29yZCIsInNlZ21lbnRUb0N1dCIsImxlbmd0aCIsImZpbmFsUG9zaXRpb24iLCJlbmRPZldvcmRJbmRleCIsImluZGV4T2YiLCJzZWdtZW50Il0sInNvdXJjZXMiOlsiL3RzL2J1dHRvbi9QbGF5ZXJCdXR0b24udHN4IiwiL3RzL2NsaXBib2FyZC50c3giLCIvdHMvY29kZS50c3giLCIvdHMvcGxheWFibGUudHN4IiwiL3RzL3VzZUJvdW5kYXJ5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDTztVQUFXLFNBQVVFLFlBQVlBLENBQUNDLEtBQUs7WUFDN0MsTUFBTTtjQUFFQyxNQUFNO2NBQUVDLEVBQUU7Y0FBRUM7WUFBTyxDQUFFLEdBQUdILEtBQUs7WUFDckMsTUFBTSxD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