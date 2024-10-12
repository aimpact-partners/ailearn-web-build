System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "marked-mangle@1.1.9", "marked@5.1.2", "marked-gfm-heading-id@3.2.0", "katex@0.16.11", "highlight.js@11.10.0", "marked-highlight@2.1.4"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, bimport, __Bundle, __pkg, ims, Markdown, __beyond_pkg, hmr;
  _export("Markdown", void 0);
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_markedMangle2) {
      dependency_3 = _markedMangle2;
    }, function (_marked2) {
      dependency_4 = _marked2;
    }, function (_markedGfmHeadingId2) {
      dependency_5 = _markedGfmHeadingId2;
    }, function (_katex2) {
      dependency_6 = _katex2;
    }, function (_highlightJs) {
      dependency_7 = _highlightJs;
    }, function (_markedHighlight2) {
      dependency_8 = _markedHighlight2;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.7"], ["firebase", "10.14.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.2"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.6"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.8.0"], ["wavesurfer.js", "7.8.6"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.11"], ["@types/react-dom", "18.3.0"], ["typescript", "5.6.3"], ["@aimpact/chat-sdk", "1.3.0"], ["@aimpact/ailearn-app", "0.1.13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.3.0/widgets/markdown"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['marked-mangle', dependency_3], ['marked', dependency_4], ['marked-gfm-heading-id', dependency_5], ['katex', dependency_6], ['highlight.js', dependency_7], ['marked-highlight', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.3.0/widgets/markdown');
      ims = new Map();
      /**************************
      INTERNAL MODULE: ./markdown
      **************************/
      ims.set('./markdown', {
        hash: 3629865041,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Markdown = Markdown;
          var _react = require("react");
          var _useMarked = require("./use-marked");
          /*bundle */
          function Markdown(props) {
            const {
              ready,
              output
            } = (0, _useMarked.useMarked)(props.content ?? props.children);
            const attrs = {
              ...props
            };
            if (output === '') return null;
            // const content = attrs.children ?? attrs.content;
            // ['content', 'children'].forEach(key => delete attrs[key]);
            // console.log(0.1, content);
            return _react.default.createElement("div", {
              ...attrs,
              dangerouslySetInnerHTML: {
                __html: output
              }
            });
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./use-marked
      ****************************/

      ims.set('./use-marked', {
        hash: 1883193896,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useMarked = useMarked;
          var _react = require("react");
          var _markedMangle = require("marked-mangle");
          var _marked = require("marked");
          var _markedGfmHeadingId = require("marked-gfm-heading-id");
          var _katex = require("katex");
          var _highlight = require("highlight.js");
          var _markedHighlight = require("marked-highlight");
          // Import highlight.js
          // Import marked-highlight
          _marked.marked.use((0, _markedMangle.mangle)());
          const options = {
            prefix: 'my-prefix-'
          };
          _marked.marked.use((0, _markedGfmHeadingId.gfmHeadingId)(options));
          function useMarked(content) {
            const [output, setOutput] = _react.default.useState('');
            async function render(content) {
              const options = {
                breaks: false // Disable line breaks for Markdown
              };
              _marked.marked.setOptions(options);
              _marked.marked.use((0, _markedHighlight.markedHighlight)({
                async: true,
                langPrefix: 'language-',
                highlight(code, lang) {
                  const language = _highlight.default.getLanguage(lang) ? lang : 'plaintext';
                  return _highlight.default.highlight(code, {
                    language
                  }).value;
                }
              }));
              // 1. Temporarily replace inline and block math expressions with placeholders
              let placeholderCounter = 0;
              const mathPlaceholders = {};
              const placeholderPrefix = 'MATH_PLACEHOLDER_';
              content = content.replace(/\\\((.*?)\\\)/g, (match, mathContent) => {
                const placeholder = `${placeholderPrefix}${placeholderCounter++}`;
                mathPlaceholders[placeholder] = _katex.default.renderToString(mathContent, {
                  displayMode: false
                });
                return placeholder;
              });
              content = content.replace(/\\\[(.*?)\\\]/gs, (match, mathContent) => {
                const placeholder = `${placeholderPrefix}${placeholderCounter++}`;
                mathPlaceholders[placeholder] = _katex.default.renderToString(mathContent, {
                  displayMode: true
                });
                return placeholder;
              });
              // 2. Pass the content through marked
              let output = await (0, _marked.marked)(content, {
                breaks: false
              });
              // 3. Replace placeholders with actual rendered KaTeX
              Object.keys(mathPlaceholders).forEach(placeholder => {
                output = output.replace(new RegExp(placeholder, 'g'), mathPlaceholders[placeholder]);
              });
              setOutput(output);
            }
            _react.default.useEffect(() => {
              render(content ?? '');
            }, [content]);
            return {
              ready: !!output,
              output
            };
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./markdown",
        "from": "Markdown",
        "name": "Markdown"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Markdown') && _export("Markdown", Markdown = require ? require('./markdown').Markdown : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3VzZU1hcmtlZCIsIk1hcmtkb3duIiwicHJvcHMiLCJyZWFkeSIsIm91dHB1dCIsInVzZU1hcmtlZCIsImNvbnRlbnQiLCJjaGlsZHJlbiIsImF0dHJzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIl9tYXJrZWRNYW5nbGUiLCJfbWFya2VkIiwiX21hcmtlZEdmbUhlYWRpbmdJZCIsIl9rYXRleCIsIl9oaWdobGlnaHQiLCJfbWFya2VkSGlnaGxpZ2h0IiwibWFya2VkIiwidXNlIiwibWFuZ2xlIiwib3B0aW9ucyIsInByZWZpeCIsImdmbUhlYWRpbmdJZCIsInNldE91dHB1dCIsInVzZVN0YXRlIiwicmVuZGVyIiwiYnJlYWtzIiwic2V0T3B0aW9ucyIsIm1hcmtlZEhpZ2hsaWdodCIsImFzeW5jIiwibGFuZ1ByZWZpeCIsImhpZ2hsaWdodCIsImNvZGUiLCJsYW5nIiwibGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInZhbHVlIiwicGxhY2Vob2xkZXJDb3VudGVyIiwibWF0aFBsYWNlaG9sZGVycyIsInBsYWNlaG9sZGVyUHJlZml4IiwicmVwbGFjZSIsIm1hdGNoIiwibWF0aENvbnRlbnQiLCJwbGFjZWhvbGRlciIsInJlbmRlclRvU3RyaW5nIiwiZGlzcGxheU1vZGUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsIlJlZ0V4cCIsInVzZUVmZmVjdCJdLCJzb3VyY2VzIjpbIi90cy9tYXJrZG93bi50c3giLCIvdHMvdXNlLW1hcmtlZC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsVUFBQSxHQUFBRCxPQUFBO1VBRU87VUFBVyxTQUFVRSxRQUFRQSxD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