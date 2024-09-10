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
        const dependencies = new Map([["@beyond-js/reactive", "1.2.0"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/react-18-widgets", "0.0.6"], ["@beyond-js/widgets", "1.1.0"], ["dompurify", "3.1.6"], ["firebase", "10.13.1"], ["highlight.js", "11.10.0"], ["katex", "0.16.11"], ["marked", "14.1.1"], ["marked-gfm-heading-id", "4.1.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["pragmate-ui", "1.0.0-beta.2"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["typescript", "5.5.4"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/ailearn-app", "0.1.6-dev.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/chat-sdk@1.1.0/widgets/markdown"
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['marked-mangle', dependency_3], ['marked', dependency_4], ['marked-gfm-heading-id', dependency_5], ['katex', dependency_6], ['highlight.js', dependency_7], ['marked-highlight', dependency_8]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/chat-sdk@1.1.0/widgets/markdown');
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
        hash: 1607615161,
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
                breaks: false // Enable line breaks for Markdown
                // highlight: (code, lang) => {
                // 	// Check if the language is valid, otherwise fall back to 'plaintext'
                // 	const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                // 	return hljs.highlight(code, { language }).value; // Return the highlighted code
                // }
              };
              _marked.marked.setOptions(options);
              _marked.marked.use((0, _markedHighlight.markedHighlight)({
                async: true,
                langPrefix: 'language-',
                highlight(code, lang) {
                  // Check if the language is valid, otherwise fall back to 'plaintext'
                  const language = _highlight.default.getLanguage(lang) ? lang : 'plaintext';
                  return _highlight.default.highlight(code, {
                    language
                  }).value;
                }
              }));
              let output = await (0, _marked.marked)(content, {
                breaks: true
              });
              // Adjusted regex to match the processed block math delimiters `[ ... ]`
              output = output.replace(/\[([\s\S]+?)\]/g, (match, mathContent) => {
                try {
                  return _katex.default.renderToString(mathContent, {
                    displayMode: true
                  });
                } catch (error) {
                  console.error('Error rendering block KaTeX:', error);
                  return match; // Return the original text if there is an error
                }
              })
              // Match inline math (if needed)
              .replace(/\\\((.+?)\\\)/g, (match, mathContent) => {
                try {
                  return _katex.default.renderToString(mathContent, {
                    displayMode: false
                  });
                } catch (error) {
                  console.error('Error rendering inline KaTeX:', error);
                  return match;
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX3VzZU1hcmtlZCIsIk1hcmtkb3duIiwicHJvcHMiLCJyZWFkeSIsIm91dHB1dCIsInVzZU1hcmtlZCIsImNvbnRlbnQiLCJjaGlsZHJlbiIsImF0dHJzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIl9tYXJrZWRNYW5nbGUiLCJfbWFya2VkIiwiX21hcmtlZEdmbUhlYWRpbmdJZCIsIl9rYXRleCIsIl9oaWdobGlnaHQiLCJfbWFya2VkSGlnaGxpZ2h0IiwibWFya2VkIiwidXNlIiwibWFuZ2xlIiwib3B0aW9ucyIsInByZWZpeCIsImdmbUhlYWRpbmdJZCIsInNldE91dHB1dCIsInVzZVN0YXRlIiwicmVuZGVyIiwiYnJlYWtzIiwic2V0T3B0aW9ucyIsIm1hcmtlZEhpZ2hsaWdodCIsImFzeW5jIiwibGFuZ1ByZWZpeCIsImhpZ2hsaWdodCIsImNvZGUiLCJsYW5nIiwibGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInZhbHVlIiwicmVwbGFjZSIsIm1hdGNoIiwibWF0aENvbnRlbnQiLCJyZW5kZXJUb1N0cmluZyIsImRpc3BsYXlNb2RlIiwiZXJyb3IiLCJjb25zb2xlIiwidXNlRWZmZWN0Il0sInNvdXJjZXMiOlsiL3RzL21hcmtkb3duLnRzeCIsIi90cy91c2UtbWFya2VkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxVQUFBLEdBQUFELE9BQUE7VUFFTztVQUFXLFNBQVVFLFFBQVFBLENBQUNDLEtBQUs7WUFDekMsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQU0sQ0FBRSxHQUFHLElBQUFKLFVBQUEsQ0FBQUssU0FBUyxFQUFDSCxLQUFLLENBQUNJ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