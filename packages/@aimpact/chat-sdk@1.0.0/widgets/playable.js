System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.36/icons", "prismjs@1.29.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
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
    }, function (_aimpactChat101SharedHooks) {
      dependency_6 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/backend", "0.1.8"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/reactive", "1.1.2"], ["firebase", "10.1.0"], ["dompurify", "3.0.5"], ["prismjs", "1.29.0"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.4"], ["marked-mangle", "1.1.2"], ["socket.io-client", "4.7.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.14"], ["@types/react-dom", "18.2.6"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
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
        hash: 3886749126,
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
        hash: 275692012,
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
                console.error('some error', e);
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
        hash: 699981752,
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
            const blocks = content.split(/(```[\s\S]*?``` | `[\s\S]*?`)/).filter(block => block.trim() !== '').map(block => {
              const content = block.trim();
              return {
                content,
                isCode: content.startsWith('```') || content.startsWith('`')
              };
            });
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
                }, block.content.replaceAll('`', ''));
              }
              const content = mark(block.content.split(' ').map(createSpan).join(' '));
              //content = mark(block.content);
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
        hash: 2299412941,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQ2pDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ29DLE1BQU0sR0FBRyxDQUFDO2dCQUM3RSxNQUFNQyxhQUFhLEdBQUdwSCxNQUFNLENBQUNXLGFBQWEsR0FBR3VHLFlBQVk7Z0JBRXpEckMsZUFBZSxFQUFFO2dCQUNqQixJQUFJLENBQUN0RCxHQUFHLENBQUM4QixPQUFPLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0I4RCxhQUFhLElBQUksQ0FBQyxFQUFFO2dCQUNuRTdGLEdBQUcsQ0FBQzhCLE9BQU8sQ0FBQ0MsYUFBYSxDQUFDLGdCQUFnQjhELGFBQWEsSUFBSSxDQUFDLENBQUM3RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7Z0JBQ3ZGOztjQUdELE1BQU02RCxjQUFjLEdBQUdoRyxJQUFJLENBQUNpRyxPQUFPLENBQUMsR0FBRyxFQUFFTixZQUFZLENBQUM7Y0FDdEQsTUFBTU8sT0FBTyxHQUFHbEcsSUFBSSxDQUFDMkUsS0FBSyxDQUFDLENBQUMsRUFBRWdCLFlBQVksQ0FBQztjQUMzQyxNQUFNL0UsUUFBUSxHQUFHc0YsT0FBTyxDQUFDeEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDb0MsTUFBTSxHQUFHLENBQUM7Y0FFOUN0QyxlQUFlLEVBQUU7Y0FDakJ0RCxHQUFHLENBQUM4QixPQUFPLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0JyQixRQUFRLEdBQUdnRCxLQUFLLElBQUksQ0FBQyxDQUFDMUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO1lBQzNGLENBQUMsRUFDRCxVQUFVLENBQ1Y7WUFFRCxPQUFPO2NBQUVqQyxHQUFHO2NBQUVGLElBQUk7Y0FBRXdEO1lBQWUsQ0FBRTtVQUN0QyIsIm5hbWVzIjpbIlBsYXllckJ1dHRvbiIsInByb3BzIiwicGxheWVyIiwiaWQiLCJjb250ZW50IiwiYWN0aW9uIiwic2V0QWN0aW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwib25QbGF5IiwibGlzdGVuIiwicG9zaXRpb25Ub0N1dCIsInBsYXkiLCJvblBhdXNlIiwic3RvcCIsImFwcGx5IiwiaWNvbiIsIm9uQ2xpY2siLCJJY29uQnV0dG9uIiwiY2xhc3NOYW1lIiwiQ2xpcGJvYXJkIiwidGV4dCIsIm1lc3NhZ2UiLCJyZWYiLCJ1c2VSZWYiLCJwb2x5ZmlsbCIsInRleHRBcmVhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidmFsdWUiLCJzdHlsZSIsInRvcCIsImxlZnQiLCJwb3NpdGlvbiIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImZvY3VzIiwic2VsZWN0Iiwic3VjY2Vzc2Z1bCIsImV4ZWNDb21tYW5kIiwibXNnIiwiY29uc29sZSIsImxvZyIsImVyciIsImVycm9yIiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInNwYW4iLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiZSIsIkNvZGUiLCJsYW5ndWFnZSIsImNoaWxkcmVuIiwiY3JlYXRlTWFya3VwIiwiX19odG1sIiwiaHRtbCIsIlByaXNtIiwiaGlnaGxpZ2h0IiwibGFuZ3VhZ2VzIiwiamF2YXNjcmlwdCIsImNscyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiUGxheWFibGUiLCJhdXRvcGxheSIsIm9uQ2xpY2tXb3JkIiwibWFyayIsInJlbW92ZUhpZ2hsaWdodCIsImJsb2NrcyIsInNwbGl0IiwiZmlsdGVyIiwiYmxvY2siLCJ0cmltIiwibWFwIiwiaXNDb2RlIiwic3RhcnRzV2l0aCIsInVzZUVmZmVjdCIsInBsYXlhYmxlQ29udGVudCIsIml0ZW0iLCJqb2luIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjb250YWlucyIsImluZGV4Iiwid29yZHNBcnJheSIsInRleHRUb1BsYXkiLCJzbGljZSIsInBhcnNlSW50Iiwib3V0cHV0IiwiaSIsImNyZWF0ZVNwYW4iLCJ3b3JkIiwia2V5IiwicmVwbGFjZUFsbCIsInVzZUJvdW5kYXJ5Iiwic2V0VGV4dCIsImN1dEluZGV4Iiwic2V0Q3V0SW5kZXgiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJ0ZXh0SWQiLCJjdXJyZW50SW5kZXgiLCJjdXJyZW50V29yZCIsInNlZ21lbnRUb0N1dCIsImxlbmd0aCIsImZpbmFsUG9zaXRpb24iLCJlbmRPZldvcmRJbmRleCIsImluZGV4T2YiLCJzZWdtZW50Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9idXR0b24vUGxheWVyQnV0dG9uLnRzeCIsInRzL2NsaXBib2FyZC50c3giLCJ0cy9jb2RlLnRzeCIsInRzL3BsYXlhYmxlLnRzeCIsInRzL3VzZUJvdW5kYXJ5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF19