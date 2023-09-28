System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@0.0.1/icons", "prismjs@1.29.0", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context) {
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
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi001Icons) {
      dependency_3 = _pragmateUi001Icons;
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

      /**************************
      INTERNAL MODULE: ./playable
      **************************/

      ims.set('./playable', {
        hash: 267553883,
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
            /**
             * Split the text into blocks of code and text.
             */
            const blocks = _react.default.useMemo(() => {
              if (!playable) return [];
              return content.split(/(```[\s\S]*?```|`[\s\S]*?`)/).filter(block => block.trim() !== '').map(block => {
                const content = block.trim();
                return {
                  content,
                  isCode: content.startsWith('```') || content.startsWith('`')
                };
              });
            }, [content, playable]);
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
              if (event.target.classList.contains('word')) {
                const index = event.target.dataset.index;
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
        hash: 2666667273,
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
              console.log('use', id, player.textId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztnQkFDdkY7O2NBR0QsTUFBTWdFLE9BQU8sR0FBR25HLElBQUksQ0FBQzhFLEtBQUssQ0FBQyxDQUFDLEVBQUVnQixZQUFZLENBQUM7Y0FDM0MsTUFBTWxGLFFBQVEsR0FBR3VGLE9BQU8sQ0FBQ3ZDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ3FDLE1BQU0sR0FBRyxDQUFDO2NBRTlDeEMsZUFBZSxFQUFFO2NBQ2pCdkQsR0FBRyxDQUFDOEIsT0FBTyxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCckIsUUFBUSxHQUFHa0QsS0FBSyxJQUFJLENBQUMsQ0FBQzVCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUMzRixDQUFDLEVBQ0QsVUFBVSxDQUNWO1lBRUQsT0FBTztjQUFFakMsR0FBRztjQUFFRixJQUFJO2NBQUV5RDtZQUFlLENBQUU7VUFDdEMiLCJuYW1lcyI6WyJQbGF5ZXJCdXR0b24iLCJwcm9wcyIsInBsYXllciIsImlkIiwiY29udGVudCIsImFjdGlvbiIsInNldEFjdGlvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsIm9uUGxheSIsImxpc3RlbiIsInBvc2l0aW9uVG9DdXQiLCJwbGF5Iiwib25QYXVzZSIsInN0b3AiLCJhcHBseSIsImljb24iLCJvbkNsaWNrIiwiSWNvbkJ1dHRvbiIsImNsYXNzTmFtZSIsIkNsaXBib2FyZCIsInRleHQiLCJtZXNzYWdlIiwicmVmIiwidXNlUmVmIiwicG9seWZpbGwiLCJ0ZXh0QXJlYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInZhbHVlIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwicG9zaXRpb24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJmb2N1cyIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJzcGFuIiwiY3VycmVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInJlbW92ZSIsImUiLCJDb2RlIiwibGFuZ3VhZ2UiLCJjaGlsZHJlbiIsImNyZWF0ZU1hcmt1cCIsIl9faHRtbCIsImh0bWwiLCJQcmlzbSIsImhpZ2hsaWdodCIsImxhbmd1YWdlcyIsImphdmFzY3JpcHQiLCJjbHMiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIlBsYXlhYmxlQ29tcG9uZW50IiwicGxheWFibGUiLCJvbkNsaWNrV29yZCIsIm1hcmsiLCJhdXRvcGxheSIsInJlbW92ZUhpZ2hsaWdodCIsImJsb2NrcyIsInVzZU1lbW8iLCJzcGxpdCIsImZpbHRlciIsImJsb2NrIiwidHJpbSIsIm1hcCIsImlzQ29kZSIsInN0YXJ0c1dpdGgiLCJ1c2VFZmZlY3QiLCJwbGF5YWJsZUNvbnRlbnQiLCJpdGVtIiwiam9pbiIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY29udGFpbnMiLCJpbmRleCIsIndvcmQiLCJ3b3Jkc0FycmF5IiwidGV4dFRvUGxheSIsInNsaWNlIiwicGFyc2VJbnQiLCJ0ZXh0SWQiLCJvdXRwdXQiLCJpIiwiY3JlYXRlU3BhbiIsImtleSIsInJlcGxhY2VBbGwiLCJQbGF5YWJsZSIsIm1lbW8iLCJleHBvcnRzIiwidXNlQm91bmRhcnkiLCJzZXRUZXh0IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiY3VycmVudEluZGV4IiwiY3VycmVudFdvcmQiLCJzZWdtZW50VG9DdXQiLCJsZW5ndGgiLCJmaW5hbFBvc2l0aW9uIiwic2VnbWVudCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvYnV0dG9uL1BsYXllckJ1dHRvbi50c3giLCJ0cy9jbGlwYm9hcmQudHN4IiwidHMvY29kZS50c3giLCJ0cy9wbGF5YWJsZS50c3giLCJ0cy91c2VCb3VuZGFyeS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGxdfQ==